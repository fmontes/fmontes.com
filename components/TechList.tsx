import TechIcon from './TechIcon';

function FallBack({ type }: { type: string }) {
    const fallbackColors = {
        'Web Components': '#e66e33',
        'Custom Events': '#00539f',
        'CSS Properties': '#009400'
    };

    const bgColor = fallbackColors[type];

    return (
        <div
            className="inline-flex rounded-full text-xl text-white font-bold place-content-center place-items-center "
            style={{ width: '72px', height: '72px', backgroundColor: bgColor }}
        >
            {type
                .split(' ')
                .map((word) => word.charAt(0))
                .join('')}
        </div>
    );
}

function TechList({ tech }: { tech: string }): JSX.Element {
    return (
        <div className="flex justify-around mt-4 mb-7 border-b-2 pb-7">
            {' '}
            {tech
                .split(',')
                .map((item: string) => item.trim())
                .map((item: string, i: number) => {
                    return (
                        <div key={i} className="flex flex-col items-center">
                            <TechIcon
                                fallback={(type) => <FallBack type={type} />}
                                size="72"
                                type={item}
                            />
                            <small className="uppercase mt-2">{item}</small>
                        </div>
                    );
                })}
        </div>
    );
}

export default TechList;
