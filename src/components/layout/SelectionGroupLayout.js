const SelectionGroupLayout = ({label, className, children}) => {
    return (
        <div className="bg-[#fff2] p-2 rounded-lg">
            <div className="text-center text-lg font-bold text-indigo-800 pb-3">
                {label}
            </div>
            <div className={"grid grid-cols-2 gap-2 " + className}>
                {children}
            </div>
        </div>
    );
}

export default SelectionGroupLayout;