interface ChildProps {
  color: string;
}

export const Child: React.FC<ChildProps> = ({ color }: ChildProps) => {
  return (
    <div className="child">
      <h1>This is child component & Selected color is {color}</h1>
    </div>
  );
};
