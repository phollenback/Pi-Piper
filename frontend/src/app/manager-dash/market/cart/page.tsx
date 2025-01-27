import ProviderCart from "@/app/components/ManagerDash/Market/Cart/ProviderCart";

export default function CartContainer() {
    return (
        <div className="flex w-full">
            <div className="grid grid-cols-2 gap-4 m-4 w-full">
                <div className="flex justify-center items-center border-2 border-black h-full">
                    <div className="text-center text-2xl">sysco</div>
                    <ProviderCart provider="Sysco"/>
                </div>
                <div className="flex justify-center items-center border-2 border-black h-full">
                    <div className="text-center">us foods</div>
                    <ProviderCart provider="USFoods"/>
                </div>
            </div>
        </div>
    );
}