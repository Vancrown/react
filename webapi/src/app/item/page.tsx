
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselApi, CarouselNext } from "@/components/ui/carousel"

import LineGraph from './price_chart'

async function getPrice() {

    const result = await fetch('https://my-json-server.typicode.com/Vancrown/react/uniqlo').then(x => x.json())

    return result['464430']
}


async function getItem(): Promise<any> {
    const result = await fetch('https://www.uniqlo.com/us/api/commerce/v5/en/products/E469054-000/price-groups/00/')

    return result.json()
}

function getImages(d: any): any {
    const img_1 = Object.values(d['images']['main']).map(x => x['image'])
    const img_2 = d['images']['sub'].map(x => x['image'])
    const res = img_1.concat(img_2)

    return res

}



export default async function Item() {
    const item = await getItem()
    const result = item['result']

    const item_id = result['l1Ids']
    const name = result['name']
    const price = result['prices']['base']['value']
    const long_description = result['longDescription']


    const img_l = getImages(result)


    const hist_price = await getPrice()
    console.log(hist_price)



    return (
        <main>

            <div>


                <div className="flex items-center justify-center pt-10">


                    <Carousel className="w-2/3"
                        opts={{
                            align: "start",
                            loop: true,
                        }}>
                        <CarouselContent>
                            {img_l.map((x, idx) => (
                                <CarouselItem key={idx}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-2">

                                                <img src={x} />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>


                <div>
                    <h2 className="p-3 text-3xl flex justify-center">
                        {name}
                    </h2>
                </div>

                <div className="text-center">
                    <h3 className="text-2xl">
                        ${price}
                    </h3>
                </div>



                <div >
                    <p dangerouslySetInnerHTML={{ __html: long_description }} className="text-l mt-10 px-20">
                    </p>
                </div>


                <div className='h-72 w-200'>
                    this sis div
                    <LineGraph />
                </div>

            </div>
        </main >
    )
}