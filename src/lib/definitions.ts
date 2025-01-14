import { Work } from "@nulib/dcapi-types";
import { PlotDatum, PlotMouseEvent } from "plotly.js";
import { z } from "zod";

/**
 * Typescript definitions
 */
type NULWork = Work & {
  canonical_link: string;
  collection: string;
};

type NULWorkWithVectors = NULWork & Vectors;

type ExtendedPlotDatum = PlotDatum & {
  id?: string;
};

type ExtendedPlotMouseEvent = PlotMouseEvent & {
  points: ExtendedPlotDatum[];
  event: MouseEvent;
};

type ThinData = {
  id: string;
  title: string;
} & Vectors;

type Thin2DData = Omit<ThinData, "z">;

type WorkPartial = Pick<
  NULWork,
  "canonical_link" | "collection" | "description" | "id" | "thumbnail" | "title"
>;

type Vectors = {
  x: number;
  y: number;
  z?: number;
};

/**
 * Zod schemas
 */
const chicagoCorpusSchema = z.object({
  row: z.string(),
  data: z.object({
    "": z.string(),
    date: z.string(),
    chunk: z.string(),
    author: z.string(),
    sentence: z.string(),
    article_id: z.string(),
    article_title: z.string(),
  }),
  vector: z.tuple([z.number(), z.number(), z.number()]),
});
type ChicagoCorpusSchema = z.infer<typeof chicagoCorpusSchema>;

const searchDCApiSchema = z.object({
  id: z.string(),
  collection: z.object({
    description: z.string(),
    id: z.string(),
    title: z.string(),
  }),
  title: z.string(),
  thumbnail: z.string(),
  work_type: z.string(),
});
type SearchDCApiSchema = z.infer<typeof searchDCApiSchema>;

export {
  chicagoCorpusSchema,
  type ChicagoCorpusSchema,
  type NULWork,
  type NULWorkWithVectors,
  type ExtendedPlotMouseEvent,
  type PlotMouseEvent,
  searchDCApiSchema,
  type SearchDCApiSchema,
  type ThinData,
  type Thin2DData,
  type WorkPartial,
  type Vectors,
};
