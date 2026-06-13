import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react';
import { overviewStats } from '../data';

export function StatCards() {
  return (
    <div className='*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs sm:grid-cols-2 lg:grid-cols-4'>
      {overviewStats.map((stat) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trend === 'up' ? IconTrendingUp : IconTrendingDown;
        return (
          <Card key={stat.id} className='@container/card'>
            <CardHeader>
              <CardDescription className='flex items-center gap-2'>
                <Icon className='size-4' />
                {stat.label}
              </CardDescription>
              <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
                {stat.value}
              </CardTitle>
              <CardAction>
                <Badge variant='outline'>
                  <TrendIcon className='size-4' />
                  {stat.delta}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className='text-muted-foreground text-sm'>
              {stat.hint}
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
