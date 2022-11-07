interface SquareProps {
  id: number;
  marker?: string;
  handleClick: (id: number) => void;
}

export default ({ id, marker, handleClick }: SquareProps) => {
  throw new Error("Not implemented");
};
