/**
 * 배열 형태의 노드를 타겟 노드에 추가합니다.
 * @param {Node[]} nodes
 * @param {Node | DocumentFragment} targetNode
 * @returns void
 */
export const appendChildren = (nodes, targetNode) => nodes.forEach((element) => targetNode.appendChild(element));
