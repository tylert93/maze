const Coinslot = ({ unit, className }) => (
  <svg
    className={className}
    width={unit * 0.75}
    height={unit * 0.75}
    viewBox="0 0 32 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="16"
      cy="16"
      r="14.9333"
      transform="matrix(1 0 0 -1 0 32)"
      fill="#D4D4D4"
      stroke="#CFCDCD"
      stroke-width="2.13333"
    />
    <circle
      cx="16"
      cy="16"
      r="14.9333"
      transform="matrix(1 0 0 -1 0 34)"
      fill="#EFEDED"
      stroke="#CFCDCD"
      stroke-width="2.13333"
    />
  </svg>
);

export default Coinslot;
