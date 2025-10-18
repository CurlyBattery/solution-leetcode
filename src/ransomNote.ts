function canCanstruct(ransomNote: string, magazine: string) {
    let newMagazine = magazine.split('');
    let can = false;
    for (let i = 0; i < ransomNote.length; i++) {
        if(newMagazine.includes(ransomNote[i])) {
            can = true;
            const idx = newMagazine.findIndex((m) => m === ransomNote[i]);
            newMagazine.splice(idx, 1);
            console.log(idx, newMagazine)
        }
        else {
            return false;
        }
    }
    return can;
}

console.log(canCanstruct('aa', 'ab'));
