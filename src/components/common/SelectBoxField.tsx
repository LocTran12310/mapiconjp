import { useCallback, useEffect, useRef, useState } from "react";

interface ISelectItem {
  label: string;
  value: string
};

interface IProps {
  id: string;
  state: string;
  items: ISelectItem[];
  onSelect: (
    e: React.MouseEvent<HTMLLabelElement> | React.KeyboardEvent<HTMLLabelElement>,
    item: ISelectItem
  ) => void;
  tabindex?: number;
  errorText?: string;
  disabled?: boolean;
  required?: boolean;
}

const SelectBoxField = (props: IProps) => {
  const [ isOpen, setOpen ] = useState(false);
  const selectBoxRef = useRef(null)
  const {
    id,
    state,
    items = [],
    onSelect = () => {
      return;
    },
    tabindex = 0,
    errorText,
    disabled = false,
    required = false,
  } = props;

  useEffect(() => {
    
  }, []);

  const handleClick = useCallback(() => {
    if (disabled) return;
    setOpen(!isOpen)
  },[isOpen, disabled]);

  const handleSelect = useCallback((
    e: React.MouseEvent<HTMLLabelElement>,
    item: ISelectItem
  ) => {
    onSelect(e, item)
    handleClick()
  },[handleClick, onSelect]);

  const onBlur = useCallback((index: number) => {
    if (index !== items.length - 1) return;
    handleClick();
  },[handleClick, items.length]);

  const onKeyDown = useCallback((
    e: React.KeyboardEvent<HTMLLabelElement>,
    item: ISelectItem) => {
      if (e.key === "Enter") {
        onSelect(e, item)
        handleClick()
      }
  },[handleClick, onSelect]);

  return (
    <div className="select-box-field mt-[20px]">
      <div className="font-bold label-field">
        <label htmlFor={id} onClick={handleClick}>{id}</label>
        {required && (
          <span className="bg-red-rq text-sm text-white px-[5px] py-[3px] ml-[5px] rounded-sm">必須</span>
        )}
      </div>
      <div className="mt-[10px] relative">
        <label htmlFor={id} onClick={handleClick} >
          <div
            id={id}
            tabIndex={tabindex}
            ref={selectBoxRef}
            className={`
              form-select 
              bg-white bg-clip-padding bg-no-repeat
              px-[15px] py-[10.5px]
              border-[2px] border-input-grey rounded-[0.3rem]
              ${isOpen ? " border-main-teal" : "" }
              ${disabled ? "bg-[#F9F9F9] select-none" : ""}
              focus:outline-main-teal
            `}
            onFocus={handleClick}
          >
            <span className="w-full">
              {state}
            </span>
          </div>
        </label>
        {errorText && (
          <div className="text-red-rq pl-[5px] mt-[5px]">{errorText}</div>
        )}
        <label htmlFor={id} className={`${isOpen ? "fixed block top-0 right-0 bottom-0 left-0 z-index-1" : "hidden"}`} onClick={handleClick}></label>
        <div className={`w-full ${isOpen ? "max-h-[100vh]" : "max-h-[0px]"} transition-all duration-100 bg-transparent peer-checked:flex overflow-hidden absolute z-10`}>
          <div className="bg-white rounded shadow border-[2px] border-main-grey mt-[10px] relative">
            <div className="right-[12px] absolute top-0 transform -translate-x-1/2 translate-y-[-64%] -rotate-45 w-[10px] h-[10px] bg-white border-r-[2px] border-t-[2px] border-main-grey"></div>
            <div className="pl-[15px] pr-[17px] py-[15px] relative z-30">
              <div className="selectbox max-h-[150px] overflow-y-auto">
                <div className="flex flex-col" onKeyDown={() => {console.log("onKeyDown")}}>
                  {items.map((item: ISelectItem, index: number) => {
                    return (
                      <label
                        key={item.label}
                        tabIndex={0}
                        htmlFor={id}
                        onClick={(e) => {handleSelect(e, item)}}
                        className="w-full hover:text-main-teal cursor-pointer focus:outline-none focus:text-main-teal"
                        onBlur={() => {onBlur(index)}}
                        onKeyDown={(e) => {onKeyDown(e, item)}}
                      >
                        <span className={`${item.label === state ? 'text-main-teal' : ''}`}>{item.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectBoxField;