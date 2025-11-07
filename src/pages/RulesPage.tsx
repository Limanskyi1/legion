import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import { FileText } from 'lucide-react';

export function RulesPage() {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">Регламент</h1>
        <p className="text-slate-600 mt-2">Правила и регламент работы спортзала</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="bg-slate-100 p-2 rounded-lg">
              <FileText className="h-6 w-6 text-slate-700" />
            </div>
            <div>
              <CardTitle>Общий регламент</CardTitle>
              <CardDescription>Основные правила и положения</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-slate-700">
            <p>Здесь будет отображаться информация о регламенте работы спортзала.</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Правила посещения</li>
              <li>Режим работы</li>
              <li>Требования безопасности</li>
              <li>Дресс-код</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
