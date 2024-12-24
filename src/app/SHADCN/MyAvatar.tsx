import Image from 'next/image'; // If you're using Image from 'next/image' anywhere else in the component
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = () => {
  return (
    <Avatar className='w-20 h-20'>
      <AvatarImage
        src="https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1735029189~exp=1735032789~hmac=ddef9f3ef1670f73b98d30b1d553b37a695145eeb8819dfab034cea709cc5073&w=740"
        alt="User Profile" // It's good to have an alt text for accessibility
        className="rounded-md object-cover" // You can customize the appearance of the image
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
