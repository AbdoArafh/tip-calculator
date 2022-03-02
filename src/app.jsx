import { useState } from 'preact/hooks'
import Logo from './components/logo'
import IconDollar from './components/icon-dollar'
import IconPerson from './components/icon-person'

function Input({id, icon, value, onInput}) {
    return (
        <div class="custom-input bg-cyan-300 flex items-center p-2 rounded-sm">
            {icon}
            <input id={id} class="text-right bg-cyan-300 text-cyan-900 font-bold grow focus:outline-none" type="text" placeholder="0" value={value || null} onInput={onInput} />
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
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [numOfPeople, setNumOfPeople] = useState(0);

    function handleBill(event) {
        if (isNaN(event.target.value)) return;
        setBill(Number(event.target.value));
    }
    function handleCustomTip(event) {
        const n = event.target.value.replace("%", "");
        if (isNaN(n)) return;
        setTip(Number(n));
    }
    function handleTip(event) {
        const n = event.target.textContent.replace("%", "");
        if (isNaN(n)) return;
        setTip(Number(n));
    }
    function handleNumOfPeople(event) {
        if (isNaN(event.target.value)) return;
        setNumOfPeople(Number(event.target.value));
    }
    function reset() {
        setBill(0);
        setTip(0);
        setNumOfPeople(0);
    }
    const tips = [5, 10, 15, 25, 50];
    return (
        <div class="flex flex-col justify-center items-center gap-20">
            <Logo />
            <div class="calculator bg-white rounded-xl font-mono p-10 gap-10 grid md:grid-cols-2 max-w-[720px]">
                <div class="text-cyan-800 font-bold flex flex-col gap-10">
                    <div class="flex flex-col gap-2">
                        <label for="bill">Bill</label>
                        <Input id="bill" value={bill} onInput={handleBill} icon={<IconDollar />} />
                    </div>
                    <div class="flex flex-col gap-4">
                        <div>Select Tip %</div>
                        <ul class="grid grid-cols-3 gap-2">
                            {tips.map(
                                (value) => (
                                    <li
                                        onClick={handleTip} 
                                        class={
                                            "bg-cyan-900 text-white text-center rounded-md py-1 px-4 cursor-pointer hover:brightness-125"
                                            + (tip === value ? " bg-cyan-500" : "")
                                        }
                                        key={value}>{value}%</li>
                                )
                            )}
                            <li>
                                <input class="bg-cyan-300 py-1 w-[100%] text-center rounded-md placeholder:text-cyan-800 placeholder:font-bold focus:outline-none" placeholder="Custom" value={tip ? tip + "%" : null} onInput={handleCustomTip} />
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="people">Number of People</label>
                        <Input id="people" icon={<IconPerson />} value={numOfPeople} onInput={handleNumOfPeople} />
                    </div>
                </div>
                <div class="bg-cyan-900 rounded-xl p-8 flex flex-col justify-between gap-10">
                    <div class="flex flex-col gap-10">
                        <Price name="Tip Amount" price={numOfPeople > 0 ? (bill * (tip / 100)) / numOfPeople : 0}/>
                        <Price name="Total" price={numOfPeople > 0 ? (bill + (bill * (tip / 100))) / numOfPeople : 0} />
                    </div>
                    <button
                        class="bg-cyan-500 text-cyan-900 font-bold py-2 rounded-md cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
                        disabled={!numOfPeople && !bill && !tip}
                        onClick={reset}
                    >
                        RESET
                    </button>
                </div>
            </div>
        </div>
    )
}