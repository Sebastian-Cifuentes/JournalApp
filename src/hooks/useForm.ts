import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations: any = {} ) => {
  
    const [ formState, setFormState ]: any = useState( initialForm );
    const [formValidators, setFormValidators]: any = useState({})

    useEffect(() => {
      createValidators();
    }, [ formState ])
    
    const isFormValid = useMemo(() => {

        for (const validator of Object.keys(formValidators)) {
            if (formValidators[validator]) return false;
        }

        return true;

    }, [ formValidators ])

    const onInputChange = ({ target }: any) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        const formCheckedValues: any = {};

        for (const formField of Object.keys(formValidations)) {
            const [fnValid, errorMessage = 'Este campo es requerido'] = formValidations[formField];
            const isFieldValid = fnValid(formState[formField]);
            formCheckedValues[`${formField}Valid`] = !isFieldValid && errorMessage;
        }

        setFormValidators(formCheckedValues);
    }

    return {
        ...formState,
        ...formValidators,
        formState,
        onInputChange,
        onResetForm,
        isFormValid
    }
}