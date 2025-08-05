import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

const barrelSizes = [10, 20, 30, 50];
const cupSize = 300;

const formatResult = (litros: number) => {
  const totalMl = litros * 1000;
  const copos = Math.floor(totalMl / cupSize);
  const sobra = totalMl % cupSize;
  return { copos, sobra };
};

export default function CalcPage() {
  return (
    <main className="p-4 sm:p-6 md:p-10 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-center text-amber-400 mt-10 mb-17">
        Cálculo de Copos por Barril (Copo de 300ml)
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {barrelSizes.map((litros) => {
          const { copos, sobra } = formatResult(litros);
          return (
            <Card key={litros}>
              <CardContent className="p-4 text-center space-y-2">
                <div className="flex w-full items-center justify-center ">
                    <Image src={'/images/barriloktos.png'} alt="Barril Oktos" width={250} height={300} />
                </div>
                <p className="text-lg font-semibold">{litros}Lts</p>
                <p className="text-4xl font-bold text-primary">{copos}</p>
                <p className="text-sm text-muted-foreground">
                  copos de 300ml
                </p>
                <p className="text-xs text-muted-foreground">
                  Sobra: {sobra}ml
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
