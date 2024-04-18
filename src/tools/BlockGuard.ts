import Block from "./Block";

export default function isBlock(object: any): object is Block {
  return object instanceof Block;
}
