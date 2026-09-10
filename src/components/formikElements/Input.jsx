import { FastField, ErrorMessage, useFormikContext } from 'formik';
import { Fragment, useEffect, useState } from 'react';

const Input = props => {
  const { name, type, label } = props;

  const { values, touched, errors } = useFormikContext();

  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    setHasValue(!!values[name]);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentionally scoped to this field's value only
  }, [values[name]]);

  return (
    <>
      <div className="relative group ">
        <FastField
          name={name}
          id={name}
          type={type}
          className={`peer  text-gray-300  w-full bg-transparent outline-none px-4 py-2 rounded-xl border-1 focus:border-2 border-[#4070f4] focus:shadow-md text-left ${
            touched[name] && errors[name] ? '!border-red-500 border' : null
          }`}
          onKeyDown={e => {
            const form = e.target.form; // کل فرم
            const elements = Array.from(form.elements); // همه‌ی المان‌های فرم به صورت آرایه
            const index = elements.indexOf(e.target); // جایگاه المان فعلی
            if (e.key === 'Enter') {
              e.preventDefault(); // جلوگیری از submit شدن فرم
              const next = elements[index + 1]; // المان بعدی

              if (next) {
                next.focus(); // فوکوس روی فیلد بعدی
              }
            }
            if (e.key === 'Backspace' && e.target.value === '') {
              e.preventDefault()
              const prev = elements[index - 1];
              if (prev) prev.focus();
            }
          }}
        />
        {/* Error message */}
        {touched[name] && errors[name] && (
          <div className="absolute -top-9 left-4 whitespace-nowrap hidden group-hover:block bg-red-500 text-white text-xs px-3 py-1 rounded shadow-md z-10">
            {errors[name]}
            <div className="absolute -bottom-1 left-4 w-2 h-2 bg-red-500 rotate-45"></div>
          </div>
        )}

        <label
          htmlFor={name}
          className={`absolute left-4 top-1/2 -translate-y-1/2  bg-[#141417] px-2 text-md font-light text-gray-500 transition-all duration-300 noSelect outline-none 
					peer-focus:top-0 peer-focus:left-3 peer-focus:text-sm peer-focus:text-[#4070f4] ${
            hasValue ? ' !top-0 !left-3 !text-sm  !text-[#4070f4] ' : ''
          }
						${touched[name] && errors[name] ? '!top-0 !left-3 !text-sm  !text-red-500' : 'border-black'} 
					`}>
          {label}
        </label>
      </div>
    </>
  );
};

export default Input;
