type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    const toBe = (valBe: any) => {
        if(val !== valBe) {
            throw Error("Not Equal")
        }
        
        return val === valBe;
    }; 
    const notToBe = (valNotBe: any) => {
        if(val === valNotBe) {
            throw Error("Equal")
        }

        return val !== valNotBe;
    }

    return {
        toBe,
        notToBe
    }
};
