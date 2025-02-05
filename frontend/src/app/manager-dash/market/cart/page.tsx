import ProviderCart from "@/app/components/ManagerDash/Market/Cart/ProviderCart";

export default function CartContainer() {
    return (
        <div className="flex w-full">
            <div className="grid grid-cols-2 gap-4 m-4 w-full">
                {/* Sysco Provider Section */}
                <div className="flex flex-col border-2 border-black h-full p-4">
                    <div className="text-center text-2xl mb-4">Sysco</div>
                    <ProviderCart provider="Sysco" />
                </div>
                {/* US Foods Provider Section */}
                <div className="flex flex-col border-2 border-black h-full p-4">
                    <div className="text-center text-2xl mb-4">US Foods</div>
                    <ProviderCart provider="USFoods" />
                </div>
            </div>
        </div>
    );
}