import Logo from './components/logo'
import IconDollar from './components/icon-dollar'
import IconPerson from './components/icon-person'

function Input({id, icon}) {
    return (
        <div class="custom-input bg-cyan-300 flex items-center p-2 rounded-sm">
            {icon}
            <input id={id} class="text-right bg-cyan-300 grow focus:outline-none" type="text" placeholder="0" />
        </div>
    )
}

function Price({name, price}) {
    return (
        <div class="flex flex-row justify-between">
            <div>
                <div class="text-white font-bold">{name}</div>
                <div class="text-cyan-800 text-sm">/ person</div>
            </div>
            <div class="text-3xl font-bold text-cyan-500">${Math.ceil(price)}.{Math.round((price % 1) * 100).toString().padStart(2, "0")}</div>
        </div>
    )
}

export default function App() {
    return (
        <div class="flex flex-col justify-center items-center gap-20">
            <Logo />
            <div class="calculator bg-white rounded-xl font-mono p-10 gap-10 grid grid-cols-2 lg:grid-cols-2 max-w-[720px]">
                <div class="text-cyan-800 font-bold flex flex-col gap-10">
                    <div class="flex flex-col gap-2">
                        <label for="bill">Bill</label>
                        <Input id="bill" icon={<IconDollar />} />
                    </div>
                    <div class="flex flex-col gap-4">
                        <div>Select Tip %</div>
                        <ul class="grid grid-cols-3 gap-2">
                            {[5, 10, 15, 25, 50].map(
                                p => <li class="bg-cyan-900 text-white text-center rounded-md py-1 px-4" key={p}>{p}%</li>
                            )}
                            <li>
                                <input class="bg-cyan-300 py-1 w-[100%] text-center rounded-md placeholder:text-cyan-800 placeholder:font-bold" placeholder="Custom" />
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="people">Number of People</label>
                        <Input id="people" icon={<IconPerson />} />
                    </div>
                </div>
                <div class="bg-cyan-900 rounded-xl p-8 flex flex-col justify-between">
                    <div class="flex flex-col gap-10">
                        <Price name="Tip Amount" price={25.55}/>
                        <Price name="Total" price={0} />
                    </div>
                    <button class="bg-cyan-500 text-cyan-900 font-bold py-2 rounded-md cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed" disabled>RESET</button>
                </div>
            </div>
        </div>
    )
}