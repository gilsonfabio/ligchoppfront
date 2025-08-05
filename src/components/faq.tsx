import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Image from "next/image"
  
  export default function Faq() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-full h-full text-white gap-2">
            <div className="flex items-center px-2 md:gap-4 w-full md:w-[50%]">
                <Image src="/images/faq.jpg" alt="Logo LigChopp" width={600} height={200} className="object-contain"/>
            </div>
            <div className="flex items-center px-2 md:gap-4 w-full md:w-[50%]">
                <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                    <h3 className="text-2xl text-yellow-400 font-bold">DÚVIDAS FREQUENTES</h3>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Tenho dúvidas sobre a quantidade de chopp necessária para o meu evento. E se faltar chopp?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Nossos especialistas podem ajudá-lo a calcular a quantidade de chopp necessária com base no tamanho do seu evento e número de convidados. 
                                Estamos comprometidos em garantir que você tenha chopp suficiente para seu evento.
                            </p>                            
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>E se o chopp não estiver gelado o suficiente durante o evento?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                A chopeira é o equipamento responsável por resfriar o chopp e aqui na Oktos só utilizamos chopeiras novas, 
                                revizadas e higienizadas antes de cada utilização. Você não precisará se preocupar com chopp quente em seu evento.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>E se eu não tiver experiência em servir chopp em barril?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Não se preocupe! Nossos especialistas podem fornecer treinamento e orientações detalhadas sobre como servir chopp em barril. Além disso, 
                                nosso sistema de barril é projetado para ser fácil de usar, com instruções claras e simples. Você estará servindo chopp de qualidade 
                                em seu evento em pouco tempo!
                            </p>                            
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Preciso de algum equipamento especial para utilizar o barril de chopp?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Não, junto com os barris de chopp acompanham nossas chopeiras. Você não precisará de nenhum equipamento especial.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>E se eu não terminar de beber todo chopp?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Garantimos a qualidade do nosso produto por até 3 dias, então caso seja acordado previamente, o chopp poderá ser consumido no dia seguinte, 
                                e as instruções da melhor forma de armazenamento serão passadas por nossos especialistas.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>    
        </div>
    )
  }
  