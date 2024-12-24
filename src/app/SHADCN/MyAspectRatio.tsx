import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

const MyAspectRatio = () => {
  return (
    <div className="w-[450px]">
    <AspectRatio ratio={1 / 1}>
      <Image fill src="https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1735029189~exp=1735032789~hmac=ddef9f3ef1670f73b98d30b1d553b37a695145eeb8819dfab034cea709cc5073&w=740" alt="Image" className="rounded-md object-cover" />
    </AspectRatio>
  </div>
  
  )
}

export default MyAspectRatio