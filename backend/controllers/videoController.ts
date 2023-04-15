import ytdl from "ytdl-core";
import { Request, Response } from "express";
const contentDisposition = require("content-disposition");
const formatBytes = (bytes: number, decimals = 2) => {
  if (!+bytes) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export const viewVideo = async (req: Request, res: Response) => {
  try {
    const { link } = req.body;
    const resp = await ytdl.getBasicInfo(link);
    const metaInfo = await ytdl.getInfo(link);
    const sizes = metaInfo.formats.map((item) => {
      if (item.hasAudio === true && item.hasVideo === true) {
        return formatBytes(parseInt(item.contentLength));
      }
    });
    res.send({
      iframe: resp.videoDetails.embed.iframeUrl,
      formats: metaInfo.formats.filter(
        (item) => item.hasVideo === true && item.hasAudio === true
      ),
      size: { size: sizes.filter((size) => size != null) },
    });
  } catch (error) {
    res.status(500).send("error could not get response");
  }
};
type ParsedQs = /*unresolved*/ any;
export const downloadVideo = async (req: Request, res: Response) => {
  const link: string | string[] | ParsedQs | ParsedQs[] | undefined =
    req.query.link;
  const quality = req.query.quality || "highest";
  const format = req.query.format;
  const info = await ytdl.getInfo(link);
  if (format === "mp4") {
    try {
      const formats = ytdl.filterFormats(info.formats, "audioandvideo");
      let format;

      if (quality === "highest") {
        format = formats[0];
      } else {
        format = formats.find((f) => f.qualityLabel === quality);
      }

      if (!format) {
        throw new Error(`No format with quality label "${quality}" found.`);
      }
      res.header(
        "Content-Disposition",
        contentDisposition(`${info.videoDetails.title}.mp4`)
      );
      ytdl(link, { format: (format as any).format_id }).pipe(res);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  } else if (format === "mp3") {
    try {
      const info = await ytdl.getInfo(link);
      const formats = ytdl.filterFormats(info.formats, "audioonly");

      res.header(
        "Content-Disposition",
        contentDisposition(`${info.videoDetails.title}.mp3`)
      );
      ytdl(link, { format: (formats as any).format_id }).pipe(res);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  }
};
