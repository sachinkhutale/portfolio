import React, { useState } from 'react'
import {
    leftService,
    rightService,
} from './mockData'



const Data = () => {
    
    const getAllComparedRows = (comparedRows, rowData, pricingType) => {
        let remainingRows = rowData.map((row) => {
            return {
                tripType: row.tripType,
                towType: row.towType,
                minTowZone: row.minTowZone,
                oldPrice: pricingType === 'oldPrice' ? `$${Number(row.fee)}` : '-',
                newPrice: pricingType === 'newPrice' ? `$${Number(row.fee)}` : '-',
                maxTowZone: row.maxTowZone,
                diff: '-',
                //towZone: row.minTowZone === row.maxTowZone ?  row.minTowZone : `${row.minTowZone}-${row.maxTowZone}`
            }
        })
        return [...comparedRows, ...remainingRows];
    }
    
    
    
    const getUnMatchedRightRows = (splittedRightService) => {
        let unMatchedRightRows = splittedRightService.map((row) => {
          return {
            ...row,
            towZone: row.minTowZone === row.maxTowZone ? row.minTowZone : `${row.minTowZone}-${row.maxTowZone}`,
            oldPrice: '-',
            newPrice: `$${Number(row.fee)}`,
            diff: `$${Number(row.fee)}`,
          }
        })
        return unMatchedRightRows
    }

    const sortStringPropInArray = (data) => {
        return data.sort(
          function (b, a) {
            if (a.tripType === b.tripType) {
              return b.towType.localeCompare(a.towType);
            }
            return a.tripType > b.tripType ? -1 : 1;
          }
        );
    }

    const getComparedPricingRows = (parsedLeftService, parsedRightService) => {
        let comparedRows = []
        let leftIndex = 0
        let rightIndex = 0
        while (leftIndex < parsedLeftService.length || rightIndex < parsedRightService.length) {
            let leftData = parsedLeftService[leftIndex]
            let rightData = parsedRightService[rightIndex]

            //If no left service towZon till 99
            if (leftData === undefined && parsedRightService.length > 0) {
                parsedRightService.splice(0, rightIndex)
                comparedRows = getAllComparedRows(comparedRows, parsedRightService, 'newPrice')
                break
            }
            //If no right service towZons till 99
            if (rightData === undefined && parsedLeftService.length > 0) {
                parsedLeftService.splice(0, leftIndex)
                comparedRows = getAllComparedRows(comparedRows, parsedLeftService, 'oldPrice')
                break
            }

            if (leftData.tripType === rightData.tripType && leftData.towType === rightData.towType) {
                //Comparison logic for tow zone ranges
                if (Number(leftData.minTowZone) === Number(rightData.minTowZone)) {
                    //If same range in both side
                    if (Number(leftData.maxTowZone) === Number(rightData.maxTowZone)) {
                        leftIndex = leftIndex + 1
                        rightIndex = rightIndex + 1
                        let towZone = ''
                        if (Number(leftData.minTowZone) === Number(rightData.maxTowZone)) {
                            towZone = leftData.minTowZone
                        } else {
                            towZone = `${leftData.minTowZone}-${leftData.maxTowZone}`
                        }
                        comparedRows.push({
                            tripType: leftData.tripType,
                            towType: leftData.towType,
                            minTowZone: leftData.minTowZone,
                            maxTowZone: leftData.maxTowZone,
                            diff: rightData.fee - leftData.fee,
                            // fee: leftData.fee,
                            // towZone: towZone,
                            // oldPrice: `$${ Number(leftData.fee)}`,
                            // newPrice: rightData.fee,

                        })
                        continue
                    } else if (Number(leftData.maxTowZone) > Number(rightData.maxTowZone)) {
                        let updatedLeftData = {
                            ...leftData,
                            minTowZone: Number(rightData.maxTowZone) + 1
                        }
                        if (Number(rightData.minTowZone) === Number(rightData.maxTowZone)) {
                            comparedRows.push({
                                tripType: leftData.tripType,
                                towType: leftData.towType,
                                minTowZone: leftData.minTowZone,
                                maxTowZone: leftData.maxTowZone,
                                diff: rightData.fee - leftData.fee,
                                // fee: leftData.fee,
                                // towZone: leftData.minTowZone,
                                // oldPrice: `$${ Number(leftData.fee)}`,
                                // newPrice: rightData.fee,

                            })
                            parsedLeftService.splice(leftIndex, 1, updatedLeftData)
                            rightIndex = rightIndex + 1
                            continue
                        } else if (Number(leftData.maxTowZone) > Number(rightData.maxTowZone)) {
                            comparedRows.push({
                                tripType: rightData.tripType,
                                towType: rightData.towType,
                                minTowZone: rightData.minTowZone,
                                maxTowZone: rightData.maxTowZone,
                                diff: rightData.fee - leftData.fee,
                                // fee: rightData.fee,
                                // towZone: `${rightData.minTowZone}-${rightData.maxTowZone}`,
                                // oldPrice: `$${ Number(leftData.fee)}`,
                                // newPrice: rightData.fee,

                            })
                            parsedLeftService.splice(leftIndex, 1, updatedLeftData)
                            rightIndex = rightIndex + 1
                            continue
                        } else {
                            comparedRows.push({
                                tripType: leftData.tripType,
                                towType: leftData.towType,
                                minTowZone: leftData.minTowZone,
                                maxTowZone: leftData.maxTowZone,
                                diff: rightData.fee - leftData.fee,
                                // fee: leftData.fee,
                                // towZone: leftData.minTowZone,
                                // oldPrice: `$${ Number(leftData.fee)}`,
                                // newPrice: rightData.fee,

                            })
                            parsedRightService.splice(rightIndex, 1, updatedLeftData)
                            leftIndex = leftIndex + 1
                            continue
                        }
                    } else if (Number(leftData.maxTowZone) < Number(rightData.maxTowZone)) {
                        if (Number(rightData.minTowZone) === Number(rightData.maxTowZone)) {
                            comparedRows.push({
                                tripType: leftData.tripType,
                                towType: leftData.towType,
                                minTowZone: leftData.minTowZone,
                                maxTowZone: leftData.maxTowZone,
                                diff: rightData.fee - leftData.fee,
                                // fee: leftData.fee,
                                // towZone: leftData.minTowZone,
                                // oldPrice: `$${ Number(leftData.fee)}`,
                                // newPrice: rightData.fee,
                            })
                            let updatedLeftData = {
                                ...leftData,
                                minTowZone: Number(rightData.maxTowZone) + 1
                            }
                            parsedLeftService.splice(leftIndex, 1, updatedLeftData)
                            rightIndex = rightIndex + 1
                            continue
                        } else {
                            comparedRows.push({
                                tripType: leftData.tripType,
                                towType: leftData.towType,
                                minTowZone: leftData.minTowZone,
                                maxTowZone: leftData.maxTowZone,
                                diff: rightData.fee - leftData.fee,
                                // fee: leftData.fee,
                                // towZone: `${leftData.minTowZone}-${leftData.maxTowZone}`,
                                // oldPrice: `$${ Number(leftData.fee)}`,
                                // newPrice: rightData.fee,
                            })
                            let updatedLeftData = {
                                ...rightData,
                                minTowZone: Number(leftData.maxTowZone) + 1
                            }
                            parsedRightService.splice(rightIndex, 1, updatedLeftData)
                            leftIndex = leftIndex + 1
                            continue
                        }
                    }
                }
            } else {
                let matchedIndex = parsedRightService.length > 0 && parsedRightService.findIndex((row) => leftData.tripType === row.tripType && leftData.towType === row.towType)

                if (matchedIndex > rightIndex && matchedIndex != -1) {
                    let middleRightRowsByIndex = []
                    parsedRightService.forEach((row, index) => {
                        if (index < matchedIndex && index >= rightIndex) {
                            let towZone = (row.minTowZone !== row.maxTowZone) ? `${row.minTowZone}-${row.maxTowZone}` : row.minTowZone
                            let middleRow = {
                                tripType: row.tripType,
                                towType: row.towType,
                                minTowZone: row.minTowZone,
                                maxTowZone: row.maxTowZone,
                                diff: '-',
                                // fee: row.fee,
                                // towZone: towZone,
                                // newPrice: row.fee,
                                // oldPrice: '-',
                            }
                            middleRightRowsByIndex.push(middleRow)
                        }
                    })
                    if (middleRightRowsByIndex.length > 0) {
                        comparedRows = [...comparedRows, ...middleRightRowsByIndex]
                    }
                    rightIndex = matchedIndex
                    continue
                } else if (matchedIndex === -1) {
                    let middleLeftRows = parsedLeftService.filter((row) => leftData.tripType === row.tripType && leftData.towType === row.towType)
                    middleLeftRows = middleLeftRows.length > 0 && middleLeftRows.map((row) => {
                        let towZone = (row.minTowZone !== row.maxTowZone) ? `${row.minTowZone}-${row.maxTowZone}` : row.minTowZone
                        return {
                            tripType: row.tripType,
                            towType: row.towType,
                            minTowZone: row.minTowZone,
                            maxTowZone: row.maxTowZone,
                            diff: '-',
                            // fee: row.fee,
                            // towZone: towZone,
                            // oldPrice: `$${ Number(row.fee)}`,
                            // newPrice: '-',

                        }
                    })
                    comparedRows = [...comparedRows, ...middleLeftRows]
                    leftIndex = leftIndex + middleLeftRows.length
                }
            }

        }
        console.log(comparedRows)
        return comparedRows
    }

    let allTripTypes = ['PICKUP', 'DELIVERY', 'abc']
    let allTowTypes = ['Standard', 'Heavy', 'Medium', 'Long Haul']

    let allCombinations = [
        {
            PICKUP: ['Standard', 'Heavy', 'Medium', 'Long Haul']
        },
        {
            DELIVERY: ['Standard', 'Heavy', 'Medium', 'Long Haul']
        },
        {
            abc: ['Standard', 'Heavy', 'Medium', 'Long Haul']
        },
    ]

    const getAllCombination = (allTripTypes, rightService) => {
        let combinations = []
        allTripTypes?.forEach((type) => {
            let allTowTypes = []
            rightService.forEach((row) => {
                if(row.tripType === type) {
                    allTowTypes.push(row.towType)
                }
            })
            allTowTypes = Array.from(new Set(allTowTypes))

            let row = {
                [type]: allTowTypes
            }
            combinations.push(row)
        })
        return combinations
    }

    const getOnlyTripTypeCombination = (middleRows, tripTypes) => {
        let finalSplittedRows = []
        tripTypes.forEach((tripType, index) => {
            let splittedRows = []
            splittedRows = middleRows.map((item) => {
                return {
                    ...item,
                    tripType: tripType,
                }
            })
            finalSplittedRows = [...finalSplittedRows, ...splittedRows]
        })
        if (tripTypes.length !== 3)
            finalSplittedRows = [...finalSplittedRows, ...middleRows]

        return finalSplittedRows
    }

    const getOnlyTowTypeCombination = (middleRows, towTypes) => {
        let finalSplittedRows = []
        towTypes.forEach((towType, index) => {
            let splittedRows = []
            splittedRows = middleRows.map((item) => {
                return {
                    ...item,
                    towType: towType,
                }
            })
            finalSplittedRows = [...finalSplittedRows, ...splittedRows]
        })
        if (towTypes.length !== 4)
            finalSplittedRows = [...finalSplittedRows, ...middleRows]

        return finalSplittedRows
    }

    const getAllTripAndTowTypeCombination = (middleRows, allCombinations) => {
        let currentRow = middleRows[0]
        let finalSplittedRows = []
        allCombinations.forEach((item, index) => {
          let splittedRows = []
          let tripType = Object.keys(item)[0]
          let towTypes = item[tripType]
          splittedRows = towTypes.map((rowItems) => {
            return {
              ...currentRow,
              tripType: tripType,
              towType: rowItems,
            }
          })
          finalSplittedRows = [...finalSplittedRows, ...splittedRows]
        })
        //If all combinations present then dont take ALL ALL

        return finalSplittedRows
      }

    // const getAllTripAndTowTypeCombination = (middleRows, allCombinations, tripTypes, towTypes) => {
    //     let currentRow = middleRows[0]
    //     let finalSplittedRows = []
    //     allCombinations.forEach((tripType) => {
    //         let splittedRows = []
    //         splittedRows = towTypes.map((towType) => {
    //             return {
    //                 ...currentRow,
    //                 tripType: tripType,
    //                 towType: towType,
    //             }
    //         })
    //         finalSplittedRows = [...finalSplittedRows, ...splittedRows]
    //     })

    //     if(tripTypes.length !== 3 && towTypes.length !== 4)
    //         finalSplittedRows = [...finalSplittedRows, ...middleRows]

    //     return finalSplittedRows
    // }

    const getAllTripTypeCombination = (middleRows, tripTypes) => {
        let finalSplittedRows = []
        allCombinations.forEach((item, index) => {
            let splittedRows = []
            let tripType = Object.keys(item)[0]
            splittedRows = middleRows.map((item) => {
                return {
                    ...item,
                    tripType: tripType,
                }
            })
            finalSplittedRows = [...finalSplittedRows, ...splittedRows]
        })
        return finalSplittedRows
    }

    const getAllTowTypeCombination = (middleRows) => {
        let finalSplittedRows = []
        allTowTypes.forEach((towType) => {
            let splittedRows = []
            splittedRows = middleRows.map((item) => {
                return {
                    ...item,
                    towType: towType,
                }
            })
            finalSplittedRows = [...finalSplittedRows, ...splittedRows]
        })
        return finalSplittedRows
    }
 
    const checkAllRowsTripTypes = (otherService) => {
        let isAll = true
        otherService.length > 0 && otherService.forEach((row) => {
            if (row.tripType != 'ALL') {
                isAll = false
            }
        })
        return isAll
    }

    const checkAllRowsTowTypes = (otherService) => {
        let isAll = true
        otherService.length > 0 && otherService.forEach((row) => {
            if (row.towType != 'ALL') {
                isAll = false
            }
        })
        return isAll
    }

    const checkCombination1 = (leftService, rightService) => {
        let finalServiceData = []
        let leftIndex = 0
        let rightIndex = 0
        while (leftIndex < leftService.length && leftService.length > 0) {
            let currentRow = leftService[leftIndex]
            
            if (currentRow.tripType === 'ALL') {
                if (currentRow.towType === 'ALL') {
                    let middleRows = leftService.filter((row) => currentRow.tripType === row.tripType && currentRow.towType === row.towType)
                    leftIndex = leftIndex + middleRows.length

                    let isOtherServiceTripTypeAll = checkAllRowsTripTypes(rightService)
                    let isOtherServiceTowTypeAll = checkAllRowsTowTypes(rightService)

                    let tripTypes = []
                    rightService.forEach((row) => {
                        if (!tripTypes.includes(row.tripType) && row.tripType !== "ALL") {
                            tripTypes.push(row.tripType)
                        }
                    })

                    let towTypes = []
                    rightService.forEach((row) => {
                        if (!towTypes.includes(row.towType) && row.towType !== "ALL") {
                            towTypes.push(row.towType)
                        }
                    })

                    if (isOtherServiceTripTypeAll && isOtherServiceTowTypeAll) {
                        finalServiceData = [...finalServiceData, ...middleRows]
                        return finalServiceData

                    } else if (!isOtherServiceTripTypeAll && isOtherServiceTowTypeAll) {
                        let splittedRows = getOnlyTripTypeCombination(middleRows, tripTypes)
                        finalServiceData = [...finalServiceData, ...splittedRows]

                    } else if (isOtherServiceTripTypeAll && !isOtherServiceTowTypeAll) {                        
                        let splittedRows = getOnlyTowTypeCombination(middleRows, towTypes)
                        finalServiceData = [...finalServiceData, ...splittedRows]

                    }  else if (!isOtherServiceTripTypeAll && !isOtherServiceTowTypeAll) {
                        let allCombinations = getAllCombination(tripTypes, rightService)

                        let splittedRows = getAllTripAndTowTypeCombination(middleRows, allCombinations)
                        finalServiceData = [...finalServiceData, ...splittedRows]
                    }

                } else {

                    let middleRows = leftService.filter((row) => currentRow.tripType === row.tripType && currentRow.towType === row.towType)
                    leftIndex = leftIndex + middleRows.length

                    let isOtherServiceTripTypeAll = checkAllRowsTripTypes(rightService)
                    let isOtherServiceTowTypeAll = checkAllRowsTowTypes(rightService)

                    let tripTypes = []
                    rightService.forEach((row) => {
                        if (!tripTypes.includes(row.tripType) && row.tripType !== "ALL") {
                            tripTypes.push(row.tripType)
                        }
                    })

                    if (isOtherServiceTripTypeAll && isOtherServiceTowTypeAll) {
                        finalServiceData = [...finalServiceData, ...middleRows]

                    } else if (!isOtherServiceTripTypeAll && isOtherServiceTowTypeAll){
                        let splittedRows = getOnlyTripTypeCombination(middleRows, tripTypes)
                        finalServiceData = [...finalServiceData, ...splittedRows]

                    } else if (isOtherServiceTripTypeAll && !isOtherServiceTowTypeAll){
                        finalServiceData = [...finalServiceData, ...middleRows]

                    } else if (!isOtherServiceTripTypeAll && !isOtherServiceTowTypeAll){
                        let splittedRows = getOnlyTripTypeCombination(middleRows, tripTypes)
                        finalServiceData = [...finalServiceData, ...splittedRows]

                    }
                }
            } else if (currentRow.towType === 'ALL') {
                let middleRows = leftService.filter((row) => currentRow.tripType === row.tripType && currentRow.towType === row.towType)
                leftIndex = leftIndex + middleRows.length

                let isOtherServiceTripTypeAll = checkAllRowsTripTypes(rightService)
                let isOtherServiceTowTypeAll = checkAllRowsTowTypes(rightService)

                let towTypes = []
                rightService.forEach((row) => {
                    if (!towTypes.includes(row.towType) && row.towType !== "ALL") {
                        towTypes.push(row.towType)
                    }
                })

                if (isOtherServiceTripTypeAll && isOtherServiceTowTypeAll) {
                    finalServiceData = [...finalServiceData, ...middleRows]

                } else if (!isOtherServiceTripTypeAll && isOtherServiceTowTypeAll) {
                    finalServiceData = [...finalServiceData, ...middleRows]

                } else if (isOtherServiceTripTypeAll && !isOtherServiceTowTypeAll) {
                    let splittedRows = getOnlyTowTypeCombination(middleRows, towTypes)
                    finalServiceData = [...finalServiceData, ...splittedRows]
                    
                } else if (!isOtherServiceTripTypeAll && !isOtherServiceTowTypeAll) {
                    let splittedRows = getOnlyTowTypeCombination(middleRows, towTypes)
                    finalServiceData = [...finalServiceData, ...splittedRows]

                }

            } else {
                let withoutSplittedRows = []
                leftService.forEach((row) => {
                    if (row.tripType != 'ALL' &&  row.towType != 'ALL') {
                        withoutSplittedRows.push(row)
                    } else {
                        return
                    }
                })
                finalServiceData = [...finalServiceData, ...withoutSplittedRows]
                leftIndex = leftIndex + withoutSplittedRows.length
            }
        }
        return finalServiceData
    }

    const removeCommonRows = (splittedRows, originalRows) => {
        let updatedSplittedRows = splittedRows || []
        let updatedOriginalRows = originalRows || []

        let leftIndex = 0
        while (leftIndex < originalRows.length && originalRows.length > 0) {
            let currentRow = originalRows[leftIndex]
            let similarOriginalRows = originalRows.filter((row) => currentRow.tripType === row.tripType && currentRow.towType === row.towType)

            let matchedIndex = splittedRows.length > 0 && splittedRows.findIndex((row) => currentRow.tripType === row.tripType && currentRow.towType === row.towType)
            if (matchedIndex != -1) {
                let currentSplittedRow = splittedRows[matchedIndex]
                if (leftIndex < currentSplittedRow.originalIndex) {
                    updatedSplittedRows = updatedSplittedRows.filter((row) => !(currentSplittedRow.tripType === row.tripType && currentSplittedRow.towType === row.towType))
                } else {
                    updatedOriginalRows = updatedOriginalRows.filter((row) => !(currentRow.tripType === row.tripType && currentRow.towType === row.towType))
                }
            }
            leftIndex = leftIndex + similarOriginalRows.length
        }
        updatedOriginalRows = updatedOriginalRows.filter((row) => row.tripType !== 'ALL' && row.towType !== 'ALL')
        return [...updatedOriginalRows, ...updatedSplittedRows]
    }

    const removeCommonRowsFromSplittedRows = (splittedLeftService) => {
        let mainIndex = 0
        let updatedLeftData = splittedLeftService || []
        while (mainIndex < splittedLeftService.length) {
            let currentRow = splittedLeftService[mainIndex]
            let startIndex = 0
            let lastIndex = 0
            let isFirstCombination = false
            splittedLeftService.forEach((row, index) => {
                if (!isFirstCombination) {
                    if (currentRow.tripType === row.tripType && currentRow.towType === row.towType && Number(row.maxTowZone) === 99) {
                        startIndex = index
                        isFirstCombination = true
                    }
                }
            })
            
            if (startIndex > 0) {
                splittedLeftService.forEach((row, index) => {
                    if ((index > startIndex) && currentRow.tripType === row.tripType && currentRow.towType === row.towType) {
                        //remove this element
                        //updatedLeftData = updatedLeftData.splice(index, 1)
                    }
                })
            }

            let similarRows = splittedLeftService.filter((row) => currentRow.tripType === row.tripType && currentRow.towType === row.towType) || []
            mainIndex = mainIndex + similarRows.length
        }
    }


    /////////////////////////////// Logic 2 ///////////////////////////

    const checkIsRowPresentNew = (finalArray, splittedArray) => {
        let isPresent =false
        const splittedArrayRow = splittedArray[0]
        finalArray.forEach((row) => {
            if (row.tripType === splittedArrayRow.tripType && row.towType === splittedArrayRow.towType) {
                isPresent = true
            }
        })
        return isPresent
    }

    const getTripTypeCombinationNew = (finalArray, middleRows, tripType) => {
        let splittedRows = []
        splittedRows = middleRows.map((item) => {
            return {
                ...item,
                tripType: tripType,
            }
        })
        const isRowPresent = checkIsRowPresentNew(finalArray, splittedRows)
        if (!isRowPresent)
            finalArray = [...finalArray, ...splittedRows]
        return finalArray
    }

    const getTowTypeCombinationNew = (finalArray, middleRows, towType) => {
        let splittedRows = []
        splittedRows = middleRows.map((item) => {
            return {
                ...item,
                towType: towType,
            }
        })
        const isRowPresent = checkIsRowPresentNew(finalArray, splittedRows)
        if (!isRowPresent) {
            finalArray = [...finalArray, ...splittedRows]
        }
        return finalArray
    }

    const getTripTowTypeCombinationNew =(middleRows, tripType, towType) => {
        let splittedRows = []
        splittedRows = middleRows.map((item) => {
            return {
                ...item,
                tripType: tripType,
                towType: towType,
            }
        })
        return splittedRows
    }

    const checkIsAllTypeNew = (service) => {
        let isAll = false
        service.length > 0 && service.forEach((row) => {
            if (row.tripType === 'ALL' || row.towType === 'ALL') {
                isAll = true
            }
        })
        return isAll
    }

    const getSplittedAllCombinations = (leftService, rightService) => {
        let finalArray = []
        let mainIndex = 0

        while (mainIndex < leftService.length) {
            const currentRow = leftService[mainIndex]
            const middleRows = leftService.filter((row) => currentRow.tripType === row.tripType && currentRow.towType === row.towType)

            const isTripTypeAll = currentRow.tripType === 'ALL'
            const isTowTypeAll =  currentRow.towType === 'ALL'

            if (isTripTypeAll && isTowTypeAll) {

                let rightIndex = 0
                if (rightService.length > 0) {
                    while (rightIndex < rightService.length) {
                        const currentRightRow = rightService[rightIndex] 
                        const isRightTripALL = currentRightRow.tripType === 'ALL'
                        const isRightTowALL = currentRightRow.towType === 'ALL'
                        const middleRightRows = rightService.filter((row) => row.tripType === currentRightRow.tripType && row.towType === currentRightRow.towType)

                        if (isRightTripALL && !isRightTowALL) {
                            finalArray = getTowTypeCombinationNew(finalArray, middleRows, currentRightRow.towType)
                            rightIndex = rightIndex + middleRightRows.length
                            continue
                        }
                        if (!isRightTripALL && isRightTowALL) {
                            finalArray = getTripTypeCombinationNew(finalArray, middleRows, currentRightRow.tripType)
                            rightIndex = rightIndex + middleRightRows.length
                            continue
                        }
                        if (!isRightTripALL && !isRightTowALL) {
                            const splittedArray = getTripTowTypeCombinationNew(middleRows, currentRightRow.tripType, currentRightRow.towType)
                            const isRowPresent = checkIsRowPresentNew(finalArray, splittedArray)
                            if (!isRowPresent)
                                finalArray = [...finalArray, ...splittedArray]
                            rightIndex = rightIndex + middleRightRows.length
                            continue
                        }
                        if (isRightTripALL && isRightTowALL) {
                            const isRowPresent = checkIsRowPresentNew(finalArray, middleRows)
                            if (!isRowPresent)
                                finalArray = [...finalArray, ...middleRows]
                            rightIndex = rightIndex + rightService.length
                            break
                        }
                    }
                }
                //if (leftService.length === 1) { //It means if right side has only ALL ALL
                    const isRowPresent = checkIsRowPresentNew(finalArray, middleRows)
                    if (!isRowPresent)
                        finalArray = [...finalArray, ...middleRows]
                //}
                mainIndex = mainIndex + middleRows.length
            }

            if (isTripTypeAll && !isTowTypeAll) {
                const tripTypes = ['PICKUP', 'DELIVERY', 'abc']
                const towTypes = ['Standard', 'Heavy', 'Medium', 'Long Haul']
                tripTypes.forEach((tripType) => {
                    rightService.length > 0 && rightService.forEach((row) => {
                        const isRightTripALL = row.tripType === 'ALL'
                        const isRightTowALL = row.towType === 'ALL'

                        if (isRightTripALL && !isRightTowALL) {
                            if (tripTypes.includes(row.tripType) && currentRow.towType === row.towType) {
                                finalArray = getTripTypeCombinationNew(finalArray, middleRows, row.tripType)
                                return
                            }
                        }
                        if(!isRightTripALL && isRightTowALL) {
                            if (tripType === row.tripType && towTypes.includes(currentRow.towType)) {
                                finalArray = getTripTypeCombinationNew(finalArray, middleRows, row.tripType)
                                return
                            }
                        }
                        if (!isRightTripALL && !isRightTowALL) {
                            if (tripType === row.tripType && currentRow.towType === row.towType) {
                                finalArray = getTripTypeCombinationNew(finalArray, middleRows, row.tripType)
                                return
                            }
                        }
                    })
                })
                const isRowPresent = checkIsRowPresentNew(finalArray, middleRows)
                if (!isRowPresent)
                    finalArray = [...finalArray, ...middleRows]
                mainIndex = mainIndex + middleRows.length
            }

            if (!isTripTypeAll && isTowTypeAll) {
                const tripTypes = ['PICKUP', 'DELIVERY', 'abc']
                const towTypes = ['Standard', 'Heavy', 'Medium', 'Long Haul']
                towTypes.forEach((towType) => {
                    rightService.length > 0 && rightService.forEach((row) => {
                        const isRightTripALL = row.tripType === 'ALL'
                        const isRightTowALL = row.towType === 'ALL'

                        if (isRightTripALL && !isRightTowALL) {
                            if (tripTypes.includes(currentRow.tripType) && towType === row.towType ) {
                                finalArray = getTowTypeCombinationNew(finalArray, middleRows, row.towType)
                                return
                            }
                        }
                        if (!isRightTripALL && !isRightTowALL) {
                            if (currentRow.tripType === row.tripType && towType === row.towType) {
                                finalArray = getTowTypeCombinationNew(finalArray, middleRows, row.towType)
                                return
                            }
                        }
                    })
                })
                const isRowPresent = checkIsRowPresentNew(finalArray, middleRows)
                if (!isRowPresent)
                    finalArray = [...finalArray, ...middleRows]
                mainIndex = mainIndex + middleRows.length
            }

            if (!isTripTypeAll && !isTowTypeAll) {
                const isRowPresent = checkIsRowPresentNew(finalArray, middleRows)
                if (!isRowPresent)
                    finalArray = [...finalArray, ...middleRows]
                mainIndex = mainIndex + middleRows.length
            }
        }
        return finalArray

    }

    const campareByTowZone = (splittedLeftService, splittedRightService) => {
        let leftIndex = 0
        let finalArray = []

        const hasLeftServiceALLType = checkIsAllTypeNew(splittedLeftService)
        const hasRightServiceALLType = checkIsAllTypeNew(splittedRightService)

        //If ALL option, get diff bet both services in same rows
        if (hasLeftServiceALLType || hasRightServiceALLType) {
            while (leftIndex < splittedLeftService.length) {
                const currentRow = splittedLeftService[leftIndex]
                const currentLeftRowGroup = splittedLeftService.filter((row) => currentRow.tripType === row.tripType && currentRow.towType === row.towType)
                const currentRightRowGroup = splittedRightService.filter((row) => currentRow.tripType === row.tripType && currentRow.towType === row.towType)

                if (currentRightRowGroup.length > 0) {
                    //Remove same group from right service
                    splittedRightService = splittedRightService.filter((row) => !(currentRow.tripType === row.tripType && currentRow.towType === row.towType))
                }
                const comparedRows = getComparedPricingRows(currentLeftRowGroup, currentRightRowGroup)
                finalArray = [...finalArray, ...comparedRows]
                leftIndex = leftIndex + currentLeftRowGroup.length
            }

            //Concat remaining rows from right service if any
            if (splittedRightService.length > 0) {
                finalArray = getAllComparedRows(finalArray, splittedRightService, 'newPrice')
            }
        } else {
            //If no ALL get diff directly with core logic
            finalArray = getComparedPricingRows(splittedLeftService, splittedRightService)
        }

        return finalArray
    }

    const splitMultipleTypes = (updatedServiceText) => {
        let finalArray = []

        if (updatedServiceText.length > 0) {
          let mainIndex = 0
          while (mainIndex < updatedServiceText.length) {
            const currentRow = updatedServiceText[mainIndex]
            const similarRows = updatedServiceText.filter((row) => currentRow.tripType === row.tripType && currentRow.towType === row.towType)

            const tripType = currentRow.tripType
            const isMultipleTripTypes = tripType.indexOf(',')

            const towType = currentRow.towType
            const isMultipleTowTypes = towType.indexOf(',')

            if ((isMultipleTripTypes !==-1) && (isMultipleTowTypes !== -1)) {
                let finalSplittedRows = []
                const tripTypes = tripType.split(',')
                const towTypes = towType.split(',')
                tripTypes.forEach((tripType) => {
                    let splittedRows = []
                    towTypes.forEach((towType) => {
                        splittedRows = similarRows.map((row) => {
                            let splittedRow = {
                                ...row,
                                tripType: tripType,
                                towType: towType,
                            }
                            return splittedRow
                        })
                        finalSplittedRows = [...finalSplittedRows, ...splittedRows]
                    })
                })
                finalArray = [...finalArray, ...finalSplittedRows]
                mainIndex = mainIndex + similarRows.length
            } else if (isMultipleTripTypes !== -1) {
                const tripTypes = tripType.split(',')
                let finalSplittedRows = []
                tripTypes.forEach(tripType => {
                  let splittedRows = similarRows.map((row) => {
                    return {
                      ...row,
                      tripType: tripType,
                  }
                  })
                  finalSplittedRows = [...finalSplittedRows, ...splittedRows]
                })
                finalArray = [...finalArray, ...finalSplittedRows]
                mainIndex = mainIndex + similarRows.length
            } else if (isMultipleTowTypes !== -1) {
              const towTypes = towType.split(',')
    
              let finalSplittedRows = []
              towTypes.forEach(towType => {
                let splittedRows = similarRows.map((row) => {
                  return {
                    ...row,
                    towType: towType,
                }
                })
                finalSplittedRows = [...finalSplittedRows, ...splittedRows]
              })
              finalArray = [...finalArray, ...finalSplittedRows]
              mainIndex = mainIndex + similarRows.length
            } else {
              finalArray = [...finalArray, ...similarRows]
              mainIndex = mainIndex + similarRows.length
            }
          }
        }
        return finalArray
      }

    const compareLogic = (leftService, rightService) => {
        leftService = splitMultipleTypes(leftService)
        rightService = splitMultipleTypes(rightService)

        const hasLeftServiceALLType = checkIsAllTypeNew(leftService)
        const hasRightServiceALLType = checkIsAllTypeNew(rightService)
        
        //Split lift service with comparing right service if ALL option
        const splittedLeftService = hasLeftServiceALLType ? 
            getSplittedAllCombinations(leftService, rightService) : leftService

        const splittedRightService = hasRightServiceALLType ?
            getSplittedAllCombinations(rightService, leftService) : rightService

        //Compare lift service with right service
        let comparedRows = campareByTowZone(splittedLeftService, splittedRightService)




        //let comparedRows = getComparedPricingRows(splittedLeftService, splittedRightService)

        /*let filteredLeftService = leftService.filter((row) => row.tripType !== 'ALL' && row.towType !== 'ALL') || []
        let filteredLeftServiceWithAll = []
        leftService.length > 0 &&  leftService.forEach((row, index) => {
            let filteredRow = {}
            if (row.tripType === 'ALL' || row.towType === 'ALL') {
                filteredRow = {
                    ...row,
                    originalIndex: index
                }
                filteredLeftServiceWithAll.push(filteredRow)
            }
        })

        let filteredRightService = rightService.filter((row) => row.tripType !== 'ALL' && row.towType !== 'ALL') || []
        let filteredRightServiceWithAll = []
        rightService.length > 0 &&  rightService.forEach((row, index) => {
            let filteredRow = {}
            if (row.tripType === 'ALL' || row.towType === 'ALL') {
                filteredRow = {
                    ...row,
                    originalIndex: index
                }
                filteredRightServiceWithAll.push(filteredRow)
            }
        })

        let splittedLeftService = leftService || []
        //Get all the combinations if 'ALL' type 
        if (filteredLeftServiceWithAll && filteredLeftServiceWithAll.length > 0) {

            //Get all the combinations where ALL type came only from the service with right service excluding ALL option only
            let comapareWith = filteredRightService.length > 0 ? filteredRightService : rightService
            splittedLeftService = checkCombination1(filteredLeftServiceWithAll, comapareWith)

            //Get all the combinations if single ALL ALL type came only from the service with right service including ALL option only
            let firstRow = leftService.length > 0 && leftService[0]
            let isTriptypeTowtypeALL = leftService.length === 1 && firstRow.tripType === 'ALL' && firstRow.towType === 'ALL'
            if (isTriptypeTowtypeALL && filteredRightService.length > 0) {
                let splittedLeftServiceWithAll = checkCombination1(filteredLeftServiceWithAll, filteredRightServiceWithAll)
                splittedLeftService = [...splittedLeftService, ...splittedLeftServiceWithAll]
            }

            //Remove common rows within splitted array only
            removeCommonRowsFromSplittedRows(splittedLeftService)
            //splittedLeftService = removeCommonRowsFromSplittedRows(splittedLeftService)

            //Remove common rows within splitted array with original array
            if (filteredLeftService && filteredLeftService.length > 0)
                splittedLeftService = removeCommonRows(splittedLeftService, leftService)
        }



        let splittedRightService = rightService || []
        //Get all the combinations if 'ALL' type 
        if (filteredRightServiceWithAll && filteredRightServiceWithAll.length > 0) {
            
            //Get all the combinations where ALL type came only from the service with left service excluding ALL option only
            let comapareWith = filteredLeftService.length > 0 ? filteredLeftService : leftService
            splittedRightService = checkCombination1(filteredRightServiceWithAll, comapareWith)

            //Get all the combinations if single ALL ALL type came only from the service with left service including ALL option only
            let firstRow = rightService.length > 0 && rightService[0]
            let isTriptypeTowtypeALL = rightService.length === 1 && firstRow.tripType === 'ALL' && firstRow.towType === 'ALL'
            if (isTriptypeTowtypeALL && filteredLeftService.length > 0) {
                let splittedRightServiceWithAll = checkCombination1(filteredRightServiceWithAll, filteredLeftServiceWithAll)
                splittedRightService = [...splittedRightService, ...splittedRightServiceWithAll]
            }

            //Remove common rows within splitted array only
            //removeCommonRowsFromSplittedRows(splittedRightService)
            //splittedLeftService = removeCommonRowsFromSplittedRows(splittedRightService)
       
            //Remove common rows within splitted array only
            if (filteredRightService && filteredRightService.length > 0)
                splittedRightService = removeCommonRows(splittedRightService, rightService)

        }*/

        // if (splittedLeftService.length > 0) {
        //     splittedLeftService = sortStringPropInArray(splittedLeftService)
        // }
      
        // if (splittedRightService.length > 0) {
        //     splittedRightService = sortStringPropInArray(splittedRightService)
        // }

        //Compare left service with right service
        let comparedTableRows = []
        //getComparedPricingRows(splittedLeftService, splittedRightService)

        let tableMainRows = []
        let currentIndex = 0
        while (currentIndex < comparedTableRows.length) {
            let currentRow = comparedTableRows[currentIndex]
            let sameData = comparedTableRows.filter((row) => currentRow.tripType === row.tripType && currentRow.towType === row.towType)
            let numOfIncrements = 0
            let numOfDecrements = 0
            sameData.length > 0 && sameData.forEach((row, index) => {
                if (row.diff > 0)
                    numOfIncrements = numOfIncrements + 1
                if (row.diff < 0)
                    numOfDecrements = numOfDecrements + 1
                
                if (index === sameData.length - 1) {
                    tableMainRows.push({
                        ...row,
                        oldPrice: '-',
                        newPrice: '-',
                        towZone: '1-99',
                        incresed: numOfIncrements,
                        decresed: numOfDecrements
                    })
                    currentIndex = currentIndex + sameData.length
                }
            })
        }


    }

    return (
        <div className='home_data'>
            <h1 className='home_title'>
                Sachin Khutale
                <svg
                    width="36"
                    height="36"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="home__hand"
                >
                    <path
                        d="M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z"
                        fill="#FFDD67"
                    ></path>
                    <path
                        d="M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z"
                        fill="#EBA352"
                    ></path>
                    <path
                        d="M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z"
                        fill="#FFDD67"
                    ></path>
                    <path
                        d="M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z"
                        fill="#EBA352"
                    ></path>
                    <path
                        d="M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z"
                        fill="#FFDD67"
                    ></path>
                    <path
                        d="M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z"
                        fill="#EBA352"
                    ></path>
                    <path
                        d="M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z"
                        fill="#FFDD67"
                    ></path>
                    <path
                        d="M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z"
                        fill="#EBA352"
                    ></path>
                    <path
                        d="M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z"
                        fill="#FFDD67"
                    ></path>
                    <path
                        d="M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z"
                        fill="#EBA352"
                    ></path>
                </svg>
            </h1>
            <h3 className='home_subtitles'>UI Devloper</h3>
            <p className='home_descriptions'>I'm react devloper, and I'm very passionate and dedicated to my work.</p>
            <a href='#contact' className='button button--flex' onClick={() => compareLogic(leftService, rightService)}
            >
                Compare
                <svg
                    className="button__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                        fill="var(--container-color)"
                    ></path>
                    <path
                        d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                        fill="var(--container-color)"
                    ></path>
                </svg>
            </a>
            {/* {renderIf(isOpen)(
            <div style={{ height: 'calc(100vh - 220px)', overflow: 'auto' }}>
                <Table style={{ backgroundColor: parsedLeftService?.length ? 'white' : 'rgb(232, 231, 231)' }} selectable>
                <Table.Header>{renderCompareTableHeaderCell()}</Table.Header>
                {
                    renderCompareTable(parsedLeftService, parsedRightService)
                }
                </Table>
            </div>
            )} */}
        </div>
    )
}

export default Data