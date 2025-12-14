import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSendFeedback } from "@/hooks/useSendFeedback";
import { useMessage } from "@/contexts/MessageContext";

import { Spinner } from "./ui/spinner";

const feedbackTypes = [
  { value: "BUG", label: "Bug Report" },
  { value: "SUG", label: "Suggestion" },
  { value: "IMP", label: "Improvement" },
];



const FeedbackForm = () => {
  const { sendFeedback, loadingSend } = useSendFeedback();
  const { newMessage } = useMessage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const type = formData.get("type") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const fileRaw = formData.get("screenshot");
    const file = fileRaw instanceof File && fileRaw.size > 0 ? fileRaw : null;

    if (!type || !title || !description) {
      newMessage({
        messageType: "warning",
        message: "You need to select a feedback type, insert a title and description.",
      });

      return;
    }

    const form = e.currentTarget;
    const success = await sendFeedback(type, title, description, file);

    if (success) {
      form.reset();
    }
  };

  return (
    <Card className="w-10/12 max-w-md">
      <CardHeader className="w-full">
        <CardTitle>Send us a feedback</CardTitle>
        <CardDescription>
          You can send us a feedback using the following formulary
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className=""
        >
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field className="flex-col">
                  <Select required name="type">
                    <SelectTrigger className="w-fit">
                      <SelectValue placeholder="Select a feedback type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Feedback type</SelectLabel>
                        {feedbackTypes.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="title">Title</FieldLabel>
                  <Input
                    id="title"
                    placeholder="Insert one title here"
                    required
                    name="title"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="description">Description</FieldLabel>
                  <Textarea
                    id="description"
                    placeholder="Describe your feedback here"
                    maxLength={1000}
                    required
                    name="description"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="file">Screenshot</FieldLabel>
                  <FieldDescription>
                    Insert the screenshot of the problem here
                  </FieldDescription>
                  <Input id="file" type="file" name="screenshot" />
                </Field>
              </FieldGroup>
            </FieldSet>
            <div className="flex justify-center">
              <Button type="submit" className="w-full md:w-1/3">
                {loadingSend && <Spinner />} Send feedback
              </Button>
            </div>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
};

export default FeedbackForm;
