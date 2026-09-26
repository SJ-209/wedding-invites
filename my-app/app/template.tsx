export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-fade flex w-full flex-1 flex-col">{children}</div>
  );
}
