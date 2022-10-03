/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express from "express";

export interface JwtPayload {
  _id: string;
}

declare global {
  namespace Express {
    interface Request {
      userId?: Record<JwtPayload, any>;
    }
  }
}
