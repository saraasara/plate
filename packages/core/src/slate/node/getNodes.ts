import { Node } from 'slate';
import { Modify } from '../../common/types/utility/types';
import { NodeOf, TNode } from './TNode';
import { TNodeEntry } from './TNodeEntry';

/**
 * Return a generator of all the node entries of a root node. Each entry is
 * returned as a `[Node, Path]` tuple, with the path referring to the node's
 * position inside the root node.
 */
export const getNodes = <N extends NodeOf<R>, R extends TNode = TNode>(
  root: R,
  options?: Modify<
    NonNullable<Parameters<typeof Node.nodes>[1]>,
    {
      pass?: (entry: TNodeEntry<NodeOf<N>>) => boolean;
    }
  >
) =>
  Node.nodes(root, options as any) as Generator<TNodeEntry<N>, void, undefined>;
