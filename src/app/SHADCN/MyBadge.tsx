import { Badge } from "@/components/ui/badge";

const MyBadge = ({ variant, title }: { variant: string; title: string }) => {
  return <Badge variant={variant}>{title}</Badge>;
};

export default MyBadge;
