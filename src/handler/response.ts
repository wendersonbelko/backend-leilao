import { Response } from "express";

export class Result {
  public handler = (status: "ERROR" | "SUCCESS", statusCode: number, data: any , res: Response) => {
    res.status((statusCode)).json({
      status: status,
      code: statusCode,
      data: data,
    });
  };
}
