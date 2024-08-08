import useLocalStorage, {
  readLocalStorage,
  updateLocalStorageWithFunction,
} from "../hooks/useLocalStorage";
import router from "next/router";
import { GradioFile } from "../types/GradioFile";

const vallex_ID = "vallexParams";

export type VallexParams = {
  text: string;
  prompt: string;
  language: string;
  accent: string;
  mode: string;

  seed: number;
  use_random_seed: boolean;
};

export const initialVallexParams: VallexParams = {
  text: "",
  prompt: "",
  language: "Mix",
  accent: "no-accent",
  mode: "short",

  seed: 0,
  use_random_seed: true,
};

export type VallexResult = {
  audio: GradioFile;
  metadata: {
    _version: string;
    _hash_version: string;
    _type: string;
    text: string;
    prompt: string;
    language: string;
    accent: string;
    mode: string;
  };
};

export const sendToVallex = (melody?: string) => {
  if (!melody) return;
  updateLocalStorageWithFunction(
    vallex_ID,
    (vallexParams: VallexParams = initialVallexParams) =>
      ({ ...vallexParams, melody } as VallexParams)
  );
  router.push("/vallex");
};

export const useVallexParams = () =>
  useLocalStorage<VallexParams>(vallex_ID, initialVallexParams);

export const useVallexResult = () =>
  useLocalStorage<VallexResult | null>(vallex_ID + ".output", null);

export const getVallexParams = (): VallexParams =>
  readLocalStorage(vallex_ID) ?? initialVallexParams;
