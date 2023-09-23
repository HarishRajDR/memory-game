type Props = {
  symbol: number;
};

function Symbol(props: Props) {
  return (
    <div>
      <img src={`/${props.symbol}.svg`} width={100} />
    </div>
  );
}

export default Symbol;
