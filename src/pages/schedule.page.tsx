import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import { Calendar } from 'lucide-react';

export function SchedulePage() {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">График</h1>
        <p className="text-slate-600 mt-2">Расписание работы и тренировок</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="bg-slate-100 p-2 rounded-lg">
              <Calendar className="h-6 w-6 text-slate-700" />
            </div>
            <div>
              <CardTitle>Расписание</CardTitle>
              <CardDescription>График тренировок и занятий</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-slate-700">
            <p>Здесь будет отображаться график работы спортзала и расписание тренировок.</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold mb-2">Понедельник - Пятница</h3>
                <p className="text-sm">06:00 - 23:00</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold mb-2">Суббота - Воскресенье</h3>
                <p className="text-sm">08:00 - 21:00</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
