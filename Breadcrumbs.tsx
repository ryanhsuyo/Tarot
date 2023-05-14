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
                        <BreadcrumbLink className=" hover:text-teal-400" href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink className=" hover:text-teal-400" href="/TarotCardsIntroPage">
                            塔羅牌算命
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        </>
    );
};

export default Breadcrumbs;
