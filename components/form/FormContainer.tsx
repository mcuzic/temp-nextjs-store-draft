'use client';

import { useActionState } from 'react';
import { useEffect } from 'react';
import { actionFunction } from '@/utilis/types';
import { toast } from 'sonner';

const initialState = {
  message: '',
};

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useActionState(action, initialState);
  useEffect(() => {
    if (state.message) {
      console.log(toast(state.message));
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
};
export default FormContainer;
