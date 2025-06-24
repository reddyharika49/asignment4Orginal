const useNavigation=()=>{

     const subTabs = [
    { name: 'Payments', path: '/payment' },
    { name: 'Cancellation', path: 'cancellation' },
    { name: 'Concession', path: 'concession' },
    { name: 'PM Issue', path: 'pmissue' },
    { name: 'Fee Installments', path: 'feeinstallments' },
    { name: 'Akash Books', path: 'akashbooks' },
    { name: 'Uniform', path: 'uniform' },
    { name: 'Transfers', path: 'transfers' },
  ];
  return{ subTabs

  };
}
export default useNavigation;