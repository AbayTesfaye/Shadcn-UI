import { Button } from "@/components/ui/button";

const MyButton = ({ title, variant }: { title: string; variant: string }) => {
  return <Button variant={variant}>{title}</Button>;
};

export default MyButton;
