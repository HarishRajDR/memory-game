type Props = {
  symbol: number;
};

function Symbol(props: Props) {
  return (
    <div className="p-3">
      <img src={`/${props.symbol}.svg`} width={100} />
    </div>
  );
}

export default Symbol;
