// app/components/ServiceCard.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  examples?: React.ReactNode;
}

export default function ServiceCard({ title, description, Icon, examples }: ServiceCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Icon className="w-4 h-4 mr-2" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
        {examples}
      </CardContent>
    </Card>
  );
}
