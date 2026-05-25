import { ImageKit } from "@imagekit/nodejs";

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_KEY,
});

async function uploadFile({
  buffer,
  fileName,
  folder = "",
  profileFileId = null,
}) {
  const file = await client.files.upload({
    file: await ImageKit.toFile(Buffer.from(buffer)),
    fileName: fileName,
    folder,
  });
  if (profileFileId) {
    await client.files.delete(profileFileId);
  }
  return file;
}
export default uploadFile;
