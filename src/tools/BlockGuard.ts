import Block from "./Block";

export default function isBlock(object: unknown): object is Block {
  return object instanceof Block;
}
