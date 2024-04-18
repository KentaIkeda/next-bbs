import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { BBSData } from '../types/types';

interface BBSCardProps {
  bbsData: BBSData;
}

export default function BBSCard({ bbsData }: BBSCardProps) {
  const { title, content, createdAt, username, id } = bbsData;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className='flex justify-between'>
        <Link
          href={`/bbs-posts/${id}`}
          className='text-blue-500'
        >
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
}
