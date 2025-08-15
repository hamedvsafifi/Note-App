import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type NotecardProps = {
  id: number;
  Title: string;
  Description: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

function CreateNotecard({ Title, onClick }: NotecardProps) {
  return (
    <Card className="relative min-h-[11rem]">
      <CardHeader>
        <CardTitle className="text-center">{Title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className="relative text-7xl text-center cursor-pointer bottom-3"
          onClick={onClick}
        >
          +
        </div>
      </CardContent>
    </Card>
  );
}

export default CreateNotecard;
