function ProductThumb({ colorClass }: { colorClass: string }) {
  return (
    <div
      className={`h-11 w-11 shrink-0 rounded-xl ${colorClass} ring-1 ring-black/5`}
    />
  );
}
export default ProductThumb;