import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react';

const Breadcrumbs = () => {
    return (
        <>
        <div className='w-full bg-black'>
            <Breadcrumb spacing="8px" className="text-white  mt-20 w-10/12 mx-auto">
                <BreadcrumbItem>
                    <BreadcrumbLink href="#" >Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href="#">About</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">Contact</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            </div>
        </>
    );
};

export default Breadcrumbs;
