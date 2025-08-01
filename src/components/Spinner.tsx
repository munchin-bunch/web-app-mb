export const Spinner = () => {
  return (
   <svg className="w-[20px] h-[20px] text-dark-primary animate-spin" viewBox="0 0 50 50">
      <circle
        className="stroke-current stroke-[6] origin-center"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeMiterlimit="10"
        strokeDasharray="80"
        strokeDashoffset="60"
      />
    </svg>
  )
}