import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react';

const Breadcrumbs = () => {
    return (
        <>
            <div className="w-full bg-black">
                <Breadcrumb
                    spacing="8px"
                    className="text-white  mt-20 w-10/12 mx-auto"
                >
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            className=" hover:text-teal-400"
                            href="/"
                        >
                            首頁
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink
                            className=" hover:text-teal-400"
                            href="/TarotCardsIntroPage"
                        >
                            塔羅牌介紹
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            className=" hover:text-teal-400"
                            href="/FortuneTellingPage"
                        >
                            塔羅牌算命
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            className=" hover:text-teal-400"
                            href="/StorePage"
                        >
                            商店
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        </>
    );
};

export default Breadcrumbs;
