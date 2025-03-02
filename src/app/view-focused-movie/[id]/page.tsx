import { ViewFocusedMovie } from "@/app/components/view-movie/view-movie";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div>
      <div className="pt-10">
      <ViewFocusedMovie imdbID={id} />
      </div>
    </div>
  );
}
