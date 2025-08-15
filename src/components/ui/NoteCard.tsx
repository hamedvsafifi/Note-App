import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

type NotecardProps = {
  id: number;
  Title: string;
  Description: string;
  onAcceptClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onRefuseClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onValueChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onDelete?: (id: number) => void;
  onEdit?: (id: number) => void;

  issave: boolean;
};

function Notecard({
  id,
  Title,
  Description,
  onAcceptClick,
  onRefuseClick,
  onValueChange,
  onDelete,
  onEdit,
  issave,
}: NotecardProps) {
  return (
    <Card className="min-h-[11rem]">
      <form action="" className="h-full relative">
        <CardHeader className="relative flex flex-row items-center justify-start gap-1 w-full">
          <CardTitle className="flex-1">{id}-</CardTitle>
          {issave ? (
            <span className="flex-5">{Title}</span>
          ) : (
            <input
              name="title"
              type="text"
              placeholder="type your title"
              value={Title}
              onChange={onValueChange}
              className="flex-5 px-1 pb-1 min-w-0 border-b-2 border-cyan-300 focus:border-fuchsia-300 transition-all outline-none focus:outline-none "
            />
          )}

          <CardAction className="relative top-1 flex-1 flex justify-end gap-1 shrink-0">
            <button
              type="button"
              onClick={() => onEdit?.(id)}
              className="text-sm"
            >
              ✏️
            </button>
            <button
              type="button"
              onClick={() => onDelete?.(id)}
              className="text-sm"
            >
              ❌
            </button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <textarea
            name="note"
            value={Description}
            rows={3}
            onChange={onValueChange}
            className="h-20 w-full overflow-auto mt-3 px-2 py-1 resize-none border-2 rounded-sm focus:border-[#ffd3de] outline-none focus:outline-none shadow-none ring-0"
            placeholder="Type here..."
            {...(issave ? { readOnly: true } : {})}
          >
            your note goes here
          </textarea>
        </CardContent>
        <CardFooter className="flex justify-around">
          {!issave && (
            <>
              <button onClick={onAcceptClick}>✅</button>
              <button onClick={onRefuseClick}>🗑️</button>
            </>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}

export default Notecard;
