import sharp from "sharp";
import { readdirSync } from "fs";
import { join } from "path";

const dir = "public/images";
const files = readdirSync(dir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

for (const file of files) {
  const input = join(dir, file);
  const output = join(dir, file);

  const meta = await sharp(input).metadata();
  const w = meta.width || 800;
  const h = meta.height || 800;

  // Upscale 2x if smaller than 2000px, then sharpen and re-encode at high quality
  const scale = w < 2000 ? 2 : 1;

  await sharp(input)
    .resize(Math.round(w * scale), Math.round(h * scale), { kernel: "lanczos3" })
    .sharpen({ sigma: 1.2, m1: 0.5, m2: 0.5 })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(output + ".tmp.jpg");

  // Replace original
  const { rename } = await import("fs/promises");
  await rename(output + ".tmp.jpg", output);

  console.log(`✓ ${file} — ${w}×${h} → ${w*scale}×${h*scale}`);
}

console.log("Done.");
