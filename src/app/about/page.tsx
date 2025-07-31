import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center px-4 py-10 md:px-8 lg:px-16 bg-background min-h-screen">
      <div className="max-w-4xl w-full space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary">
          Quem Somos
        </h1>

        <Card className="shadow-md border rounded-2xl">
          <CardContent className="p-6 md:p-8 text-base md:text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              A <strong className="text-foreground">LIG CHOPP CALDAS NOVAS</strong> é uma empresa especializada na distribuição de bebidas, com forte atuação em <strong>Caldas Novas - GO</strong> e região. Desde a nossa fundação, buscamos oferecer um serviço diferenciado, com foco na qualidade dos produtos, pontualidade nas entregas e atendimento personalizado.
            </p>
            <p>
              <strong>Somos distribuidor oficial da Oktos Cervejaria desde 2013</strong>, o que reforça nosso compromisso em trabalhar apenas com marcas reconhecidas e de alta credibilidade no mercado. Nosso portfólio conta com uma seleção criteriosa de chopes e cervejas especiais, ideais para atender tanto o consumidor final quanto bares, restaurantes, eventos e festas.
            </p>
            <p>
              Trabalhamos com <strong>profissionalismo e responsabilidade</strong>, sempre priorizando a <strong>satisfação dos nossos clientes</strong> e a construção de parcerias duradouras. Cada entrega é realizada com atenção aos detalhes, garantindo a melhor experiência em cada copo servido.
            </p>
            <p>
              Seja para uma confraternização, um evento especial ou para abastecer seu negócio, a <strong>LIG CHOPP CALDAS NOVAS</strong> é a escolha certa quando o assunto é qualidade, confiança e excelência em atendimento.
            </p>
          </CardContent>
        </Card>
        <div className="flex justify-center mt-22 md:mt-6 mb-6">
          <Link href="/">
            <Button variant="default" className="bg-amber-500 hover:bg-amber-600 border border-amber-700 text-white">
              VOLTAR
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
